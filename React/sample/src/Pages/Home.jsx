
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import Footer from '../Components/Footer'

function Home() {

    let loggedIn = true;
    return (
        <>
            <Navbar />
            <h1>
                {loggedIn ? "Welcome Back!..." : "Please Login"}
            </h1>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                <Card name="Laptop" price="650000" details="Lenovo slim" />
                <Card name="Phone" price="40000" details="Vivo" />
                <Card name="headphones" price="1500" details="realme t100" />
                <Card name="Bluetooth" price="5000" details="boat" />
                <Card name="tws" price="1500" details="realme t100" />
                <Card name="tws" price="1500" details="realme t100" />


            </div>
            <Footer />
        </>
    )
}

export default Home