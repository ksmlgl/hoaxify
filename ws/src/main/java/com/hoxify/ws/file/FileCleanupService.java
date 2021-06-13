package com.hoxify.ws.file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @author KSM
 * @since 29.05.2021 13:59
 */
@Service
@EnableScheduling
public class FileCleanupService {

	@Autowired
	FileAttachmentRepository fileAttachmentRepository;

	@Autowired
	FileService fileService;

	@Scheduled(fixedRate = 24 * 60 * 60 * 1000)
	public void cleanupStorage() {

		Date twentyFourHoursAgo = new Date(System.currentTimeMillis() - (24 * 60 * 60 * 1000));
		List<FileAttachment> fileToBeDeleted = fileAttachmentRepository.findByDateBeforeAndHoaxIsNull(twentyFourHoursAgo);
		for(FileAttachment fileAttachment: fileToBeDeleted){
			fileService.deleteAttachmentFile(fileAttachment.getName());
			fileAttachmentRepository.deleteById(fileAttachment.getId());
		}
	}
}
