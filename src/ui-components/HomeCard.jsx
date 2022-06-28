/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="430px"
      height="209px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="42.1875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="170px"
        height="36px"
        position="absolute"
        top="21px"
        left="172px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.address}
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Image
        width="123px"
        height="162px"
        position="absolute"
        top="21px"
        left="31px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "taiyaki_tennen_in 1")}
      ></Image>
    </View>
  );
}
