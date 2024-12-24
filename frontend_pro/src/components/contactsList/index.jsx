import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

export default function ContactsList() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        paddingY: 6,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: 4,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Contacts
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              flexBasis: "100%",
              md: "calc(33.33% - 16px)",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
              Email:
            </Typography>
            <Link
              href="mailto:vadimvlad20032002@gmail.com"
              underline="hover"
              sx={{ color: "#1976d2" }}
            >
              vadimvlad20032002@gmail.com
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              flexBasis: "100%",
              md: "calc(33.33% - 16px)",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
              Phone:
            </Typography>
            <Link
              href="tel:+380955981258"
              underline="hover"
              sx={{ color: "#1976d2" }}
            >
              +380955981258
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              flexBasis: "100%",
              md: "calc(33.33% - 16px)",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
              LinkedIn:
            </Typography>
            <Link
              href="https://www.linkedin.com/in/vadym-harmash-27b7a3237/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: "#1976d2" }}
            >
              Vadym Harmash
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              flexBasis: "100%",
              md: "calc(33.33% - 16px)",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#555" }}>
              GitHub:
            </Typography>
            <Link
              href="https://github.com/VadymHarmash"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: "#1976d2" }}
            >
              Vadym Harmash
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
