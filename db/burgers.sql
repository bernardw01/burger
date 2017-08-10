/*
 Navicat Premium Data Transfer

 Source Server         : AWS TE2
 Source Server Type    : MySQL
 Source Server Version : 50711
 Source Host           : te2sow.cciiqdjd26sf.us-east-1.rds.amazonaws.com:3306
 Source Schema         : bamazon

 Target Server Type    : MySQL
 Target Server Version : 50711
 File Encoding         : 65001

 Date: 08/08/2017 18:59:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for burgers
-- ----------------------------
DROP TABLE IF EXISTS `burgers`;
CREATE TABLE `burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(50) DEFAULT NULL,
  `devoured` int(2) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of burgers
-- ----------------------------
BEGIN;
INSERT INTO `burgers` VALUES (1, 'Royale w/Chees', NULL, NULL);
INSERT INTO `burgers` VALUES (2, 'Big Mac', NULL, NULL);
INSERT INTO `burgers` VALUES (3, 'Quarter Pounder', NULL, NULL);
INSERT INTO `burgers` VALUES (4, 'Whopper', NULL, NULL);
INSERT INTO `burgers` VALUES (5, NULL, NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
