import { Metadata } from "next";
import IndustriesClientWrapper from "./IndustriesClientWrapper";

export const metadata: Metadata = {
    title: "Industry-Specific Embedded Solutions | Medical, Industrial, Automotive IoT",
    description: "Discover our specialized embedded and IoT solutions tailored for Medical Devices, Industrial Automation, AgriTech, Automotive, and more.",
    alternates: {
        canonical: "/industries",
    }
};

export default function IndustriesPage() {
    return <IndustriesClientWrapper />;
}
