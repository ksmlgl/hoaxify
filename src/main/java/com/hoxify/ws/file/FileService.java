package com.hoxify.ws.file;

import com.hoxify.ws.configuration.AppConfiguration;
import org.apache.tika.Tika;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
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

	private static final Logger log = LoggerFactory.getLogger(FileService.class);
	@Autowired
	AppConfiguration appConfiguration;

	public String writeBase64EncodedStringToFile(String image) throws IOException {

		Tika tika = new Tika();

		String fileName = generateRandomName();
		File target = new File(appConfiguration.getUploadPath() +"/"+ fileName);
		OutputStream outputStream = new FileOutputStream(target);
		byte[] base64encoded = Base64.getDecoder().decode(image);

		String fileType = tika.detect(base64encoded);

		log.info(fileType);

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
}
