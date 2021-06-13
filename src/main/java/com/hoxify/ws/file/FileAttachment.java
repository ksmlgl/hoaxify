package com.hoxify.ws.file;

import com.hoxify.ws.hoax.Hoax;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * @author KSM
 * @since 29.05.2021 13:50
 */
@Data
@Entity
public class FileAttachment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String name;

	@Temporal(TemporalType.TIMESTAMP)
	private Date date;

	@OneToOne
	private Hoax hoax;

	private String fileType;



}
