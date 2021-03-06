import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import { default as React } from "react";
import HStack from "../HStack";
import Text from "../Text";
import Navbar from "./Navbar";
import { ElementProps } from "../interfaces";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: { backgroundColor: { control: "color" } },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ElementProps> = (args) => <Navbar {...args} />;

// Reuse that template for creating different stories
export const NavbarViewWithLogoImage = Template.bind({});
NavbarViewWithLogoImage.args = {
  elevation: 1,
  logoImage:
    "https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png",
  logoWidth: "60px",
  children: [
    <HStack justifyContent="center" alignItems="center" width="100%">
      <Text weight={500}>Home</Text>
    </HStack>,
    <HStack wrap="wrap" justifyContent="center" alignItems="center">
      <HStack justifyContent="center">
        <Text weight={300}>About</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text weight={300}>Example</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text weight={300}>Signup</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text weight={300}>Login</Text>
      </HStack>
    </HStack>,
  ],
  backgroundColor: "#FFF",
};

// With text logo
export const NavbarViewWithLogoText = Template.bind({});
NavbarViewWithLogoText.args = {
  elevation: 1,
  logoText: "Cosmos",
  children: [
    <HStack alignItems="center" justifyContent="center" width="100%">
      <Text weight={500}>Home</Text>
    </HStack>,
    <HStack wrap="wrap" justifyContent="center" alignItems="center">
      <HStack justifyContent="center">
        <Text weight={300}>About</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text weight={300}>Example</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text weight={300}>Signup</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text weight={300}>Login</Text>
      </HStack>
    </HStack>,
  ],
  backgroundColor: "#FFF",
};

// With no center home
export const NavbarViewWithNoCenterMenuItem = Template.bind({});
NavbarViewWithNoCenterMenuItem.args = {
  elevation: 1,
  display: "fixed",
  logoText: "Cosmos",
  padding: "5px 10px",
  children: [
    <HStack
      wrap="wrap"
      justifyContent="flex-end"
      alignItems="center"
      width="100%"
    >
      <HStack justifyContent="center">
        <Text weight={300}>About</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text weight={300}>Example</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text weight={300}>Signup</Text>
      </HStack>
      <HStack justifyContent="center">
        <Text weight={300}>Login</Text>
      </HStack>
    </HStack>,
  ],
  backgroundColor: "#FFF",
};
