import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";


const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://localhost:4001/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4001/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Deshmukh Faiz",
            description: "For E-Commerce",
            image: "",
            order_id: order.id,
            callback_url: "http://localhost:3001/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
            <Card amount={3} img={"/images/category/M.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={3} img={"/images/category/c7.png"} checkoutHandler={checkoutHandler} />
                <Card amount={5} img={"images/category/blue.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={3} img={"images/category/wrench.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={3} img={"/images/category/tv.jpg"} checkoutHandler={checkoutHandler} />
                

            </Stack>
        </Box>
    )
}

export default Home