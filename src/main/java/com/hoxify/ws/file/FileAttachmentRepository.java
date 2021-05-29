package com.hoxify.ws.file;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author KSM
 * @since 29.05.2021 13:54
 */
public interface FileAttachmentRepository extends JpaRepository<FileAttachment, Long> {
}
