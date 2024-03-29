package com.hoxify.ws.file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * @author KSM
 * @since 29.05.2021 12:19
 */
@RestController
public class FileController {

	@Autowired
	FileService fileService;

	@PostMapping("/api/1.0/hoax-attachments")
	FileAttachment saveHoaxAttachment(@RequestParam(name="image") MultipartFile multipartFile){
		return fileService.saveHoaxAttachment(multipartFile);
	}
}
