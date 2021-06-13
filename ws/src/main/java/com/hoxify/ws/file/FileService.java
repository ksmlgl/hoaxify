package com.hoxify.ws.file;

import com.hoxify.ws.configuration.AppConfiguration;
import com.hoxify.ws.user.User;
import org.apache.tika.Tika;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * @author KSM
 * @since 24.05.2021 23:29
 */
@Service
public class FileService {


	AppConfiguration appConfiguration;
	Tika tika;

	FileAttachmentRepository fileAttachmentRepository;

	public FileService(AppConfiguration appConfiguration, FileAttachmentRepository fileAttachmentRepository) {
		this.appConfiguration = appConfiguration;
		this.tika = new Tika();
		this.fileAttachmentRepository = fileAttachmentRepository;
	}


	public String writeBase64EncodedStringToFile(String image) throws IOException {

		byte[] base64encoded = Base64.getDecoder().decode(image);

		String fileName = generateRandomName();
		File target = new File(appConfiguration.getProfileStoragePath() + "/" + fileName);
		OutputStream outputStream = new FileOutputStream(target);

		outputStream.write(base64encoded);
		outputStream.close();
		return fileName;
	}

	private String generateRandomName() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}

	public void deleteProfileImage(String oldImageName) {
		if (oldImageName == null) {
			return;
		}
		deleteFile(appConfiguration.getProfileStoragePath(), oldImageName);
	}

	public String detectType(String base64) {
		byte [] base64Encoded = Base64.getDecoder().decode(base64);
		return tika.detect(base64Encoded);
	}
	public String detectType(byte [] arr) {
		return tika.detect(arr);
	}

	public FileAttachment saveHoaxAttachment(MultipartFile multipartFile) {

		String fileName = generateRandomName();
		File target = new File(appConfiguration.getAttachmenttoragePath() + "/" + fileName);
		OutputStream outputStream = null;
		String fileType = "";
		try {
			byte [] arr = multipartFile.getBytes();
			outputStream = new FileOutputStream(target);
			outputStream.write(arr);
			fileType = detectType(arr);
			outputStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		FileAttachment fileAttachment = new FileAttachment();
		fileAttachment.setName(fileName);
		fileAttachment.setDate(new Date());
		fileAttachment.setFileType(fileType);
		return fileAttachmentRepository.save(fileAttachment);

	}

	public void deleteAttachmentFile(String name) {
		if (name == null) {
			return;
		}
		deleteFile(appConfiguration.getAttachmenttoragePath(), name);

	}

	private void deleteFile(String path, String name) {
		try {
			Files.deleteIfExists(Paths.get(path, name));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void deleteAllStoragedFilesForUser(User inDB) {
		deleteProfileImage(inDB.getImage());
		List<FileAttachment> byHoaxUser = fileAttachmentRepository.findByHoaxUser(inDB);
		for(FileAttachment file:byHoaxUser){
			deleteAttachmentFile(file.getName());
		}

	}
}
