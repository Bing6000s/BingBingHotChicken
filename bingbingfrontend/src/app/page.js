import Navbar from "@/components/menubar"
import Head from 'next/head'

export default function page(){
    return(
        <div>
            <Head>
                <title>BingBingHotChicken - Home</title>
            </Head>
            <Navbar/>
        </div>
    )
}