-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 06, 2020 at 01:57 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elf_rescue`
--

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
CREATE TABLE IF NOT EXISTS `scores` (
  `s_id` int(11) NOT NULL,
  `s_userid` int(11) NOT NULL,
  `s_value` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `scores`
--

INSERT INTO `scores` (`s_id`, `s_userid`, `s_value`) VALUES
(1000, 0, 0),
(1001, 0, 0),
(1002, 0, 1),
(1003, 9, 0),
(1004, 10, 0),
(1005, 11, 0),
(1006, 11, 0),
(1007, 11, 0),
(1008, 11, 0),
(1009, 12, 0),
(1010, 10, 0),
(1011, 10, 0),
(1012, 10, 0),
(1013, 13, 0),
(1014, 13, 0),
(1015, 13, 0),
(1016, 13, 0),
(1017, 13, 0),
(1018, 13, 0),
(1019, 13, 0),
(1020, 13, 0),
(1021, 13, 0),
(1022, 14, 0),
(1023, 14, 0),
(1024, 15, 0),
(1025, 15, 0),
(1026, 10, 0),
(1027, 16, 0),
(1028, 16, 0),
(1029, 15, 0),
(1030, 17, 0),
(1031, 17, 0),
(1032, 18, 0),
(1033, 18, 0),
(1034, 16, 0),
(1035, 16, 0),
(1036, 16, 0),
(1037, 18, 0),
(1038, 19, 0),
(1039, 19, 0),
(1040, 19, 0),
(1041, 19, 0),
(1042, 19, 0),
(1043, 15, 0),
(1044, 10, 0),
(1045, 10, 0),
(1046, 15, 0),
(1047, 15, 0),
(1048, 10, 0),
(1049, 10, 0),
(1050, 10, 0),
(1051, 10, 0),
(1052, 10, 0),
(1053, 10, 0),
(1054, 10, 0),
(1055, 10, 0),
(1056, 10, 0),
(1057, 10, 0),
(1058, 10, 0),
(1059, 10, 0),
(1060, 20, 0),
(1061, 20, 0),
(1062, 20, 0),
(1063, 20, 0),
(1064, 20, 0),
(1065, 20, 0),
(1066, 20, 0),
(1067, 20, 0),
(1068, 20, 0),
(1069, 20, 0),
(1070, 20, 0),
(1071, 20, 0),
(1072, 20, 0),
(1073, 20, 0),
(1074, 20, 0),
(1075, 20, 0),
(1076, 20, 0),
(1077, 20, 0),
(1078, 21, 0),
(1079, 22, 0),
(1080, 15, 0),
(1081, 15, 0),
(1082, 15, 0),
(1083, 15, 0),
(1084, 10, 0),
(1085, 10, 0),
(1086, 10, 0),
(1087, 10, 0),
(1088, 10, 0),
(1089, 10, 0),
(1090, 10, 0),
(1091, 10, 0),
(1092, 10, 0),
(1093, 10, 0),
(1094, 10, 0),
(1095, 10, 0),
(1096, 10, 0),
(1097, 10, 0),
(1098, 10, 0),
(1099, 10, 0),
(1100, 10, 0),
(1101, 10, 0),
(1102, 10, 0),
(1103, 10, 0),
(1104, 10, 0),
(1105, 10, 0),
(1106, 10, 0),
(1107, 10, 0),
(1108, 10, 0),
(1109, 10, 0),
(1110, 10, 0),
(1111, 10, 0),
(1112, 10, 0),
(1113, 10, 0),
(1114, 10, 0),
(1115, 10, 0),
(1116, 16, 0),
(1117, 23, 0),
(1118, 4, 0),
(1119, 4, 0),
(1120, 10, 0),
(1121, 4, 0),
(1122, 15, 0),
(1123, 24, 0),
(1124, 10, 0),
(1125, 10, 0),
(1126, 10, 0),
(1127, 10, 0),
(1128, 10, 0),
(1129, 10, 0),
(1130, 10, 0),
(1131, 10, 0),
(1132, 10, 0),
(1133, 4, 0),
(1134, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(50) NOT NULL,
  `u_scoreid` int(11) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `u_name`, `u_scoreid`) VALUES
(1, 'jtf', 1),
(2, 'jtf2', 2),
(3, 'jtf5', 0),
(4, 'test', 0),
(5, 'jtf6', 1003),
(6, 'jtf7', 1003),
(7, 'jtf9', 1003),
(8, 'jtf00', 1003),
(9, 'jtf000', 1003),
(10, '', 1004),
(11, 'dfdf', 1005),
(12, 'dfdfnn', 1009),
(13, 'sdfsf', 1013),
(14, 'dsfsdf', 1022),
(15, 'sdfsdf', 1024),
(16, 'sdfs', 1027),
(17, 'asdasdsda', 1030),
(18, 'fgdg', 1032),
(19, 'zdfsdfsdf', 1038),
(20, 'sdfsdfsf', 1060),
(21, 'jyf', 1078),
(22, 'sfsf', 1079),
(23, 'joe', 1117),
(24, 'testset', 1123);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
