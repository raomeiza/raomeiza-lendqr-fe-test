import { Card, CardContent, Typography } from "@mui/material";

export const CardBox = (props:{title: string, count: String, Icon: any}) => {
  return (
    <Card
      sx={{
        width: '240px',
        height: '160px',
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          ml: 2,
          gap: 2,
        }}
      >
        <props.Icon />
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: "bold",
            color: 'text.primary',
            opacity: 0.6,
          }}
        >
          {props.title}
        </Typography>
        <Typography
        variant="h2"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            fontSize: 24,
            lineHeight: '24px',
          }}
        >
          {props.count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardBox;