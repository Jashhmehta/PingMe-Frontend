import React, { memo } from "react";
import { Link } from "../Styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";
import { motion } from "framer-motion";
const ChatItem = ({
  avatar = [],
  name,
  _id,
  lastMessage,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link
      sx={{ padding: "0" }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.02 }}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1.5rem",
          gap: "1rem",

          backgroundColor: sameSender ? "#000278" : "unset",
          color: sameSender ? "white" : "unset",
          borderBottom: "1px solid #fofofo",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <AvatarCard avatar={Array.isArray(avatar) ? avatar : []} />
        <Stack>
          <Typography color={"white"} fontSize={17}>
            {name}
          </Typography>
          {newMessageAlert && (
            <Typography fontWeight={"bold"}>
              {newMessageAlert.count} New Message
            </Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          ></Box>
        )}
      </motion.div>
    </Link>
  );
};

export default memo(ChatItem);
