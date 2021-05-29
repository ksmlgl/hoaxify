package com.hoxify.ws.hoax;

import com.hoxify.ws.file.FileAttachment;
import com.hoxify.ws.user.User;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;

/**
 * @author KSM
 * @since 26.05.2021 23:05
 */
@Data
@Entity
public class Hoax {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(length = 1000)
	private String content;

	@Temporal(TemporalType.TIMESTAMP)
	private Date timestamp;

	@ManyToOne
	private User user;

	@OneToOne(mappedBy = "hoax")
	private FileAttachment fileAttachment;


}
