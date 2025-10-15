DROP DATABASE IF EXISTS `LoveBook`;
CREATE DATABASE `LoveBook`;

USE `LoveBook`;

CREATE TABLE `address`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`street` VARCHAR(100) NOT NULL,
	`city` VARCHAR(100) NOT NULL,
	`zip_code` VARCHAR(20) NOT NULL,
	`country` VARCHAR(50) NOT NULL,
	`apartment_number` SMALLINT
);

CREATE TABLE `user`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`email` VARCHAR(100) NOT NULL,
	`formatted_email` VARCHAR(100) AS (LOWER(`email`)) VIRTUAL,
	`password` VARCHAR(250) NOT NULL,
	`firstname` VARCHAR(30) NOT NULL,
	`lastname` VARCHAR(30) NOT NULL,
	`date_of_birth` DATE NOT NULL,
	`address_id` INT UNSIGNED NOT NULL,
	`profile_picture` BLOB,
	`has_car` BOOLEAN NOT NULL DEFAULT 0,
	FOREIGN KEY (`address_id`) REFERENCES `address`(`id`) ON DELETE CASCADE,
	UNIQUE KEY `UN_email` (`formatted_email`)
);

CREATE TABLE `group_privacy`(
	`id` TINYINT UNSIGNED PRIMARY KEY,
	`name` VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE `group`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(100) NOT NULL,
	`description` VARCHAR(500),
	`icon` BLOB,
	`cover_photo` BLOB,
	`privacy_id` TINYINT UNSIGNED NOT NULL,
	`publish_allowed` BOOLEAN NOT NULL DEFAULT 1,
	`create_event_allowed` BOOLEAN NOT NULL DEFAULT 0,
	`creator_user_id` INT UNSIGNED NOT NULL,
	FOREIGN KEY (`privacy_id`) REFERENCES `group_privacy`(`id`),
	FOREIGN KEY (`creator_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT,
	UNIQUE KEY `UN_name` (`name`)
);

CREATE TABLE `user_group_role`(
	`id` TINYINT UNSIGNED PRIMARY KEY,
	`name` VARCHAR(20) NOT NULl UNIQUE
);

CREATE TABLE `user_group`(
	`group_id` INT UNSIGNED NOT NULL,
	`user_id` INT UNSIGNED NOT NULL,
	`role_id` TINYINT UNSIGNED NOT NULL,
	PRIMARY KEY(`user_id`, `group_id`),
	FOREIGN KEY (`group_id`) REFERENCES `group`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`role_id`) REFERENCES `user_group_role`(`id`),
	UNIQUE KEY `UN_user_group_role` (`user_id`,`group_id`,`role_id`)
);

CREATE TABLE `event_status`(
	`id` TINYINT UNSIGNED PRIMARY KEY,
	`name` VARCHAR(20) NOT NULl UNIQUE
);

CREATE TABLE `event`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(100) NOT NULL,
	`description` VARCHAR(500),
	`date_start` DATETIME NOT NULL,
	`date_end` DATETIME,
	`address_id` INT UNSIGNED NOT NULL,
	`cover_photo` BLOB,
	`group_id` INT UNSIGNED,
	`public` BOOLEAN NOT NULL DEFAULT 1,
	`shopping_list_enabled` BOOLEAN NOT NULL DEFAULT 0,
	`carpool_enabled` BOOLEAN NOT NULL DEFAULT 0,
	`creator_user_id` INT UNSIGNED NOT NULL,
	`status_id` TINYINT UNSIGNED NOT NULL DEFAULT 1,
	FOREIGN KEY (`group_id`) REFERENCES `group`(`id`) ON DELETE SET NULL,
	FOREIGN KEY (`creator_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT,
	FOREIGN KEY (`address_id`) REFERENCES `address`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`status_id`) REFERENCES `event_status`(`id`) ON DELETE RESTRICT,
	CHECK (`date_end` IS NULL OR `date_end` >= `date_start`)
);

CREATE TABLE `user_event_note`(
	`user_id` INT UNSIGNED NOT NULL,
	`event_id` INT UNSIGNED NOT NULL,
	`note` TINYINT UNSIGNED NOT NULL,
	PRIMARY KEY(`user_id`, `event_id`),
	FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
	CHECK (`note` BETWEEN 0 AND 10)
);

CREATE TABLE `user_event_role`(
	`id` TINYINT UNSIGNED PRIMARY KEY,
	`name` VARCHAR(20) NOT NULl UNIQUE
);

CREATE TABLE `attendance_status` (
	`id` TINYINT UNSIGNED PRIMARY KEY,
	`name` VARCHAR(32) NOT NULL UNIQUE
);

CREATE TABLE `user_event`(
	`event_id` INT UNSIGNED NOT NULL,
	`user_id` INT UNSIGNED NOT NULL,
	`role_id` TINYINT UNSIGNED NOT NULL,
	`attendance_status_id` TINYINT UNSIGNED NOT NULL DEFAULT 1,
	PRIMARY KEY(`user_id`, `event_id`),
	FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`role_id`) REFERENCES `user_event_role`(`id`),
	FOREIGN KEY (`attendance_status_id`) 
	  REFERENCES `attendance_status`(`id`),
	UNIQUE KEY `UN_user_event_role` (`user_id`,`event_id`,`role_id`)
);

CREATE TABLE `album`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`title` VARCHAR(150) NOT NULL,
	`event_id` INT UNSIGNED NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE,
	UNIQUE KEY `UN_event_title` (`event_id`,`title`)
);

CREATE TABLE `picture`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(100) NOT NULL,
	`content` BLOB NOT NULL,
	`date_uploaded` DATETIME NOT NULL,
	`user_id` INT UNSIGNED NOT NULL,
	`album_id` INT UNSIGNED,
	FOREIGN KEY (`album_id`) REFERENCES `album`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
	UNIQUE KEY `UN_album_name` (`album_id`,`name`)
);

CREATE TABLE `message`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`content` VARCHAR(1000) NOT NULL,
	`date_written` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`user_id` INT UNSIGNED NOT NULL,
	`message_id` INT UNSIGNED,
	`group_id` INT UNSIGNED,
	`event_id` INT UNSIGNED,
	`picture_id` INT UNSIGNED,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`message_id`) REFERENCES `message`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`group_id`) REFERENCES `group`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`picture_id`) REFERENCES `picture`(`id`) ON DELETE CASCADE,
	CHECK (
      ((`group_id` IS NOT NULL) + (`event_id` IS NOT NULL) + (`picture_id` IS NOT NULL)) = 1
    )
);


CREATE TABLE `ticket`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(50) NOT NULL,
	`description` VARCHAR(250),
	`price` DECIMAL(10,2) NOT NULL,
	`max_sales_count` INT UNSIGNED NOT NULL,
	`event_id` INT UNSIGNED NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE,
	UNIQUE KEY `UN_event_name` (`event_id`,`name`),
	UNIQUE KEY `UN_event_id` (`event_id`,`id`),
	CHECK (`price` >= 0),
	CHECK (`max_sales_count` >= 0)
);

CREATE TABLE `user_ticket` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT UNSIGNED,
    `email` VARCHAR(100),
    `first_name` VARCHAR(50),
    `last_name` VARCHAR(50),
    `address_id` INT UNSIGNED,
    `event_id` INT UNSIGNED,
    `ticket_id` INT UNSIGNED NOT NULL,
    `quantity` INT UNSIGNED NOT NULL,
    `date_bought` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`external` BOOLEAN AS (`user_id` IS NULL) VIRTUAL,
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`address_id`) REFERENCES `address`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`event_id`, `ticket_id`) REFERENCES `ticket`(`event_id`,`id`),
    UNIQUE KEY `UN_event_email` (`event_id`, `email`),
	UNIQUE KEY `UN_user_ticket` (`user_id`, `ticket_id`),
    CHECK (
        (`user_id` IS NOT NULL AND `email` IS NULL)
        OR
        (`user_id` IS NULL AND `email` IS NOT NULL)
    ),
	CHECK (`quantity` >= 1)
);

CREATE TABLE `poll`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`title` VARCHAR(150) NOT NULL,
	`event_id` INT UNSIGNED NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE,
	UNIQUE KEY `UN_event_title` (`event_id`,`title`)
);

CREATE TABLE `question`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(250),
	`poll_id` INT UNSIGNED NOT NULL,
	FOREIGN KEY (`poll_id`) REFERENCES `poll`(`id`) ON DELETE CASCADE,
	UNIQUE KEY `UN_poll_name` (`poll_id`,`name`)
);

CREATE TABLE `possible_answer`(
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`content` VARCHAR(150),
	`question_id` INT UNSIGNED NOT NULL,
	FOREIGN KEY (`question_id`) REFERENCES `question`(`id`) ON DELETE CASCADE,
	UNIQUE KEY `UN_question_content` (`question_id`,`content`)
);

CREATE TABLE `user_answer`(
	`user_id` INT UNSIGNED NOT NULL,
	`event_id` INT UNSIGNED NOT NULL,
	`question_id` INT UNSIGNED NOT NULL,
	`possible_answer_id` INT UNSIGNED NOT NULL,
	`date_answer` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(`user_id`, `question_id`),
	FOREIGN KEY (`user_id`, `event_id`) 
	  REFERENCES `user_event`(`user_id`, `event_id`),
	FOREIGN KEY (`question_id`) 
	  REFERENCES `question`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`possible_answer_id`) 
	  REFERENCES `possible_answer`(`id`) ON DELETE RESTRICT
);

CREATE TABLE `shopping_unit` (
  `id` TINYINT UNSIGNED PRIMARY KEY,
  `name` VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE `shopping_item` (
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`event_id` INT UNSIGNED NOT NULL,
	`user_id`  INT UNSIGNED NOT NULL,
	`name` VARCHAR(150) NOT NULL,
	`quantity` INT UNSIGNED NOT NULL,
	`unit_id` TINYINT UNSIGNED NULL,
	`arrival_time` DATETIME NOT NULL,
	FOREIGN KEY (`event_id`) 
	  REFERENCES `event`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`user_id`, `event_id`)
	  REFERENCES `user_event`(`user_id`, `event_id`) ON DELETE CASCADE,
	FOREIGN KEY (`unit_id`) 
	  REFERENCES `shopping_unit`(`id`) ON DELETE RESTRICT,
	UNIQUE KEY `UN_event_name` (`event_id`, `name`),
	CHECK (`quantity` >= 1)
);

CREATE TABLE `carpool_ride` (
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`event_id` INT UNSIGNED NOT NULL,
	`user_id` INT UNSIGNED NOT NULL,
	`departure_address_id` INT UNSIGNED NOT NULL,
	`departure_time`  DATETIME NOT NULL,
	`price` DECIMAL(10,2) NOT NULL,
	`seats_available` TINYINT UNSIGNED NOT NULL,
	`max_deviation_time` SMALLINT UNSIGNED NOT NULL,
	FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE,
	FOREIGN KEY (`user_id`, `event_id`)
	  REFERENCES `user_event`(`user_id`, `event_id`) ON DELETE CASCADE,
	FOREIGN KEY (`departure_address_id`) 
	  REFERENCES `address`(`id`) ON DELETE CASCADE,
	UNIQUE KEY `UN_event_id` (`event_id`, `id`),
	CHECK (`price` >= 0),
	CHECK (`seats_available` >= 0)
);

CREATE TABLE `carpool_booking_status` (
  `id` TINYINT UNSIGNED PRIMARY KEY,
  `name` VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE `carpool_booking` (
	`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`carpool_ride_id` INT UNSIGNED NOT NULL,
	`event_id` INT UNSIGNED NOT NULL,
	`user_id` INT UNSIGNED NOT NULL,
	`seats_booked` TINYINT UNSIGNED NOT NULL,
	`date_booked` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`status_id` TINYINT UNSIGNED NOT NULL DEFAULT 1,
	FOREIGN KEY (`user_id`, `event_id`)
	  REFERENCES `user_event`(`user_id`, `event_id`) ON DELETE CASCADE,
	FOREIGN KEY (`event_id`, `carpool_ride_id`)
	  REFERENCES `carpool_ride`(`event_id`, `id`) ON DELETE CASCADE,
	FOREIGN KEY (`status_id`) 
	  REFERENCES `carpool_booking_status`(`id`) ON DELETE RESTRICT,
	UNIQUE KEY `UN_ride_user` (`carpool_ride_id`,`user_id`),
	CHECK (`seats_booked` >= 1)
);


-- Index

CREATE INDEX IX_user__firstname_lastname ON `user`(`firstname`,`lastname`);

CREATE INDEX IX_group__name ON `group`(`name`);
CREATE INDEX IX_group__privacy ON `group`(`privacy_id`);

CREATE INDEX IX_user_group__group ON `user_group`(`group_id`);
CREATE INDEX IX_user_group__group_role ON `user_group`(`group_id`,`role_id`);

CREATE INDEX IX_event__name ON `event`(`name`);
CREATE INDEX IX_event__date_range ON `event`(`date_start`,`date_end`);
CREATE INDEX IX_event__public ON `event`(`public`);
CREATE INDEX IX_event__group ON `event`(`group_id`);
CREATE INDEX status ON `event`(`status_id`);

CREATE INDEX IX_user_event__event ON `user_event`(`event_id`);
CREATE INDEX IX_user_event__event_role ON `user_event`(`event_id`,`role_id`);
CREATE INDEX IX_user_event__event_attendance ON `user_event`(`event_id`,`attendance_status_id`);

CREATE INDEX IX_album__event ON `album`(`event_id`);
CREATE INDEX IX_picture__album ON `picture`(`album_id`);

CREATE INDEX IX_message__group ON `message`(`group_id`);
CREATE INDEX IX_message__event ON `message`(`event_id`);
CREATE INDEX IX_message__picture ON `message`(`picture_id`);
CREATE INDEX IX_message__parent ON `message`(`message_id`);

CREATE INDEX IX_ticket__event ON `ticket`(`event_id`);
CREATE INDEX IX_user_ticket__ticket ON `user_ticket`(`ticket_id`);
CREATE INDEX IX_user_ticket__user ON `user_ticket`(`user_id`);

CREATE INDEX IX_poll__event ON `poll`(`event_id`);
CREATE INDEX IX_question__poll ON `question`(`poll_id`);
CREATE INDEX IX_possible_answer__question ON `possible_answer`(`question_id`);

CREATE INDEX IX_user_answer__event ON `user_answer`(`event_id`);
CREATE INDEX IX_user_answer__event_user ON `user_answer`(`event_id`,`user_id`);

CREATE INDEX IX_shopping_item__event_user ON `shopping_item`(`event_id`,`user_id`);

CREATE INDEX IX_carpool_ride__event_time ON `carpool_ride`(`event_id`,`departure_time`);
CREATE INDEX IX_carpool_booking__ride ON `carpool_booking`(`carpool_ride_id`);
CREATE INDEX IX_carpool_booking__event ON `carpool_booking`(`event_id`);


-- Base Insert

INSERT INTO `group_privacy` (`id`,`name`) VALUES
	(1, 'public'),
	(2, 'private'),
	(3, 'secret');

INSERT INTO `user_group_role` (`id`,`name`) VALUES
	(1, 'administrator'),
	(2, 'member');

INSERT INTO `user_event_role` (`id`,`name`) VALUES
	(1, 'organizer'),
	(2, 'participant');

INSERT INTO `attendance_status` (`id`,`name`) VALUES
	(1, 'invited'),
	(2, 'going'),
	(3, 'declined');

INSERT INTO `event_status` (`id`,`name`) VALUES
	(1, 'planned'),
	(2, 'canceled'),
	(3, 'finished');

INSERT INTO `shopping_unit` (`id`,`name`) VALUES
	(1, 'piece'),
	(2, 'pack'),
	(3, 'bottle'),
	(4, 'can'),
	(5, 'case'),
	(6, 'box'),
	(7, 'bag'),
	(8, 'tray'),
	(9, 'jar'),
	(10, 'loaf'),
	(11, 'slice'),
	(12, 'bunch'),
	(13, 'pair'),
	(14, 'set'),

	(20, 'gram'),
	(21, 'kilogram'),
	(22, 'milligram'),
	(23, 'pound'),
	(24, 'ounce'),

	(30, 'liter'),
	(31, 'milliliter'),
	(32, 'centiliter'),
	(33, 'deciliter'),
	(34, 'fluid ounce'),
	(35, 'pint'),
	(36, 'quart'),
	(37, 'gallon'),

	(40, 'cup'),
	(41, 'tablespoon'),
	(42, 'teaspoon'),
	(43, 'serving');

INSERT INTO `carpool_booking_status` (`id`,`name`) VALUES
	(1, 'requested'),
	(2, 'accepted'),
	(3, 'declined');