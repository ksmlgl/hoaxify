package com.hoxify.ws.hoax;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * @author KSM
 * @since 26.05.2021 23:05
 */
@Data
@Entity
public class Hoax {

	@Id
	@GeneratedValue
	private long id;

	private String content;

	@Temporal(TemporalType.TIMESTAMP)
	private Date timestamp;
}
