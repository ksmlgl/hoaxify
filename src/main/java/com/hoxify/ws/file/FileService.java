package com.hoxify.ws.file;

import com.hoxify.ws.configuration.AppConfiguration;
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
import java.util.UUID;

/**
 * @author KSM
 * @since 24.05.2021 23:29
 */
@Service
public class FileService {


	AppConfiguration appConfiguration;
	Tika tika;

	public FileService(AppConfiguration appConfiguration) {
		this.appConfiguration = appConfiguration;
		this.tika = new Tika();
	}


	public String writeBase64EncodedStringToFile(String image) throws IOException {

		byte[] base64encoded = Base64.getDecoder().decode(image);

		String fileName = generateRandomName();
		File target = new File(appConfiguration.getUploadPath() +"/"+ fileName);
		OutputStream outputStream = new FileOutputStream(target);

		outputStream.write(base64encoded);
		outputStream.close();
		return fileName;
	}

	private String generateRandomName() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}

	public void deleteFile(String oldImageName) {
		if(oldImageName == null){
			return;
		}
		try {
			Files.deleteIfExists(Paths.get(appConfiguration.getUploadPath(), oldImageName));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public String detectType(String image) {
		byte[] base64encoded = Base64.getDecoder().decode(image);
		return tika.detect(base64encoded);
	}

	public String saveHoaxAttachment(MultipartFile multipartFile){

		String fileName = generateRandomName();
		File target = new File(appConfiguration.getUploadPath() +"/"+ fileName);
		OutputStream outputStream = null;
		try {
			outputStream = new FileOutputStream(target);
			outputStream.write(multipartFile.getBytes());
			outputStream.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return fileName;

	}
}
