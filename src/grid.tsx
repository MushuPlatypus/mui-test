import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Container from "@mui/material/Container";
import { Card, Paper } from "@mui/material";
export const Grid = () => {
  const Item = ({ sx, children }) => {
    return (
      <Card className="item" sx={sx}>
        {children}
      </Card>
    );
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(4, 1fr)",
            },
            gap: 1,
            gridTemplateRows: "auto",
            gridTemplateAreas: {
              xs: `"header"
				"main"
				"sidebar"
				"footer"`,
              sm: `"header"
				"main"
				"sidebar"
				"footer"`,
              md: `"header header header header"
				"main main main sidebar"
				"footer footer footer footer"`,
            },
          }}
        >
          <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>Header</Box>
          <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>Main</Box>
          <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>Sidebar</Box>
          <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 1,
            gridTemplateRows: "auto",
            gridTemplateAreas: {
              xs: `"header"
		  "main"
		  "sidebar"
		  "footer"`,
              sm: `"header"
		  "main"
		  "sidebar"
		  "footer"`,
              md: `"header header header header"
		  "main main main sidebar"
		  "footer footer footer footer"`,
            },
          }}
        >
          <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>Header</Box>
          <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>Main</Box>
          <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>Sidebar</Box>
          <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(4, minmax(min(10rem, 100%), 1fr))",
            },
            gap: 1,
            gridTemplateRows: "auto",
            gridTemplateAreas: {
              xs: `"header"
		  "main"
		  "sidebar"
		  "footer"`,
              sm: `"header"
		  "main"
		  "sidebar"
		  "footer"`,
              md: `"header header header header"
		  "main main main sidebar"
		  "footer footer footer footer"`,
            },
          }}
        >
          <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>Header</Box>
          <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>Main</Box>
          <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>Sidebar</Box>
          <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
        </Box>
      </Container>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "1fr 1fr 1fr 1fr",
            },
            gap: 1,
            gridTemplateRows: "auto",
            gridTemplateAreas: {
              xs: `"header"
		  "main"
		  "sidebar"
		  "footer"`,
              sm: `"header"
		  "main"
		  "sidebar"
		  "footer"`,
              md: `"header header header header"
		  "main main main sidebar"
		  "footer footer footer footer"`,
            },
          }}
        >
          <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>Header</Box>
          <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>Main</Box>
          <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>Sidebar</Box>
          <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
        </Box>
      </Container>
      <hr />
      <Container maxWidth="lg">
        <Grid2 container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid2 xs={12}>
            <Item sx={{ bgcolor: "primary.main" }}>Header</Item>
          </Grid2>
          <Grid2 xs={12} md={8}>
            <Item sx={{ bgcolor: "secondary.main" }}>Main</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "error.main" }}>Sidebar</Item>
          </Grid2>
          <Grid2 xs>
            <Item sx={{ bgcolor: "warning.main" }}>Footer</Item>
          </Grid2>
        </Grid2>
      </Container>
      <Container maxWidth="md">
        <Grid2 container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid2 xs={12}>
            <Item sx={{ bgcolor: "primary.main" }}>Header</Item>
          </Grid2>
          <Grid2 xs={12} md={8}>
            <Item sx={{ bgcolor: "secondary.main" }}>Main</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "error.main" }}>Sidebar</Item>
          </Grid2>
          <Grid2 xs>
            <Item sx={{ bgcolor: "warning.main" }}>Footer</Item>
          </Grid2>
        </Grid2>
      </Container>
      <Container maxWidth="sm">
        <Grid2 container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid2 xs={12}>
            <Item sx={{ bgcolor: "primary.main" }}>Header</Item>
          </Grid2>
          <Grid2 xs={12} md={8}>
            <Item sx={{ bgcolor: "secondary.main" }}>Main</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "error.main" }}>Sidebar</Item>
          </Grid2>
          <Grid2 xs>
            <Item sx={{ bgcolor: "warning.main" }}>Footer</Item>
          </Grid2>
        </Grid2>
      </Container>
      <Container maxWidth="xs">
        <Grid2 container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid2 xs={12}>
            <Item sx={{ bgcolor: "primary.main" }}>Header</Item>
          </Grid2>
          <Grid2 xs={12} md={8}>
            <Item sx={{ bgcolor: "secondary.main" }}>Main</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "error.main" }}>Sidebar</Item>
          </Grid2>
          <Grid2 xs>
            <Item sx={{ bgcolor: "warning.main" }}>Footer</Item>
          </Grid2>
        </Grid2>
      </Container>
      <hr />
      <Container maxWidth="lg">
        <Grid2 container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid2 xs={12}>
            <Item sx={{ bgcolor: "primary.main" }}>Header</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "secondary.main" }}>Main</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "secondary.main" }}>Main</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "error.main" }}>Sidebar</Item>
          </Grid2>
          <Grid2 xs>
            <Item sx={{ bgcolor: "warning.main" }}>Footer</Item>
          </Grid2>
        </Grid2>
      </Container>
      <Container maxWidth="md">
        <Grid2 container spacing={1} sx={{ flexGrow: 1 }}>
          <Grid2 xs={12}>
            <Item sx={{ bgcolor: "primary.main" }}>Header</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "secondary.main" }}>Main</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "secondary.main" }}>Main</Item>
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Item sx={{ bgcolor: "error.main" }}>Sidebar</Item>
          </Grid2>
          <Grid2 xs>
            <Item sx={{ bgcolor: "warning.main" }}>Footer</Item>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};
