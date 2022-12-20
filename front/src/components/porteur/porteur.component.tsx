import { useState } from "react"

const PorteurComponent = () =>{
    const [porteur,setPorteur] = useState <any>();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [gouvernorat, setGouvernorat] = useState("");
    const [city, setCity] = useState("");
    const [walletPubkey,setWalletPubKey] = useState("");
    const [telephone,setTelephone] = useState("");
}

export default PorteurComponent;