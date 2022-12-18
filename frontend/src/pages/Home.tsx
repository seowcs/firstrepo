import axios, { AxiosResponse } from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Input,
  FormLabel,
  Flex,
  Spacer,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { parseInvoice, handleClick } from "../features/info/infoSlice";
import background from "../images/royalbluewhite.svg";
import { RiUpload2Fill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const newState = useAppSelector((state) => state);
  console.log(newState);
  const [file, setFile] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    // dispatch(parseInvoice(formData));
    navigate("/results");
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="home">
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        bgImage={background}
        width="100%"
        height="100vh"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="absolute"
      >
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: {
                value: 12,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#dee6ff",
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 1,
                  color: "#aaa",
                },
                polygon: {
                  nb_sides: 6,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.2,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 160,
                random: false,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 40,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 1,
                width: 2,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 0.5,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <Navbar />
        <Flex justify="center" direction="column" px="100px">
          <Heading as="h1" size={["2xl", "3xl"]} mb="5" mt="120px">
            Invoice <span style={{ color: "#5a9f4d" }}>Parsley</span>
          </Heading>
          <Text as="h2" size={["l", "xl"]} mb="4">
            Freshening up your data~
          </Text>
          <Flex
            alignSelf="center"
            w="50%"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Button
              _hover={{
                bg: "royalblue",
                borderColor: "white",
                color: "white",
              }}
              justifyContent="center"
              alignSelf="center"
              variant="outline"
              color="black"
              border="2px"
              borderColor="black"
              textAlign="center"
              size="2xl"
              px={[6, 6, 6, 8]}
              py={[2, 3, 4]}
              rightIcon={<RiUpload2Fill />}
              mb="30px"
            >
              <FormLabel
                cursor="pointer"
                htmlFor="invfile"
                textAlign="center"
                m="0"
              >
                <Text size={["xs", "md", "lg", "xl", "2xl"]}>Upload File</Text>
              </FormLabel>
            </Button>

            <input
              hidden
              type="file"
              name="invoice"
              id="invfile"
              onChange={(e) => {
                if (!e.target.files) return;
                else {
                  setFile(e.target.files?.[0]);
                }
              }}
            />

            <Button
              bg="parsley"
              color="white"
              variant="solid"
              size="2xl"
              px={[6, 6, 6, 10]}
              py={[1, 1, 2]}
              mx="0"
            >
              <Text size={["xs", "md", "lg", "xl", "2xl"]}>
                <FormLabel htmlFor="submit" m="2">
                  Submit
                </FormLabel>
              </Text>
              <Input hidden type="submit" onClick={handleSubmit} id="submit" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
