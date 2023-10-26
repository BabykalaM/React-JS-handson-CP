import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions";
import Info from "./Info";
import { Container } from "@mui/material";

export default function Home() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container>
      <Info />
    </Container>
  );
}
