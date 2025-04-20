"use client";

import { Icon } from "@chakra-ui/react";
import { FaTrophy, FaComments, FaChartLine, FaUser, FaCheckCircle } from 'react-icons/fa';
import { IconType } from "react-icons";

interface IconRendererProps {
  iconName: string;
  boxSize?: number;
  color?: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({ iconName, boxSize = 6, color }) => {
  const iconMap: { [key: string]: IconType } = {
    FaTrophy,
    FaComments,
    FaChartLine,
    FaUser,
    FaCheckCircle,
  };

  const SelectedIcon = iconMap[iconName];

  if (!SelectedIcon) {
    return null; // Or a default icon, or an error message
  }

  return <Icon as={SelectedIcon} boxSize={boxSize} color={color} />;
};

export default IconRenderer;
