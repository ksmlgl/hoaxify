package com.hoxify.ws.file;

import com.hoxify.ws.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

/**
 * @author KSM
 * @since 29.05.2021 13:54
 */
public interface FileAttachmentRepository extends JpaRepository<FileAttachment, Long> {

	List<FileAttachment> findByDateBeforeAndHoaxIsNull(Date date);

	List<FileAttachment> findByHoaxUser(User user);
}
