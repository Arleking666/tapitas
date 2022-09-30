import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import styled from "styled-components";

const Index = () => {
  const {user, setUser} = useContext(UserContext);
  console.log(user);

  return (
    <>Hola {user?.name}</>
  )
}

export default Index;