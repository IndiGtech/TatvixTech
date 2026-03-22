import { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Privacy Policy | Tatvix Technologies",
    description: "Privacy Policy for Tatvix Technologies - Learn how we collect, use, and protect your personal information.",
    alternates: {
        canonical: "/privacy",
    }
};

export default function PrivacyPolicy() {
    return (
        <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
            <Navbar />
            <AnimatedBackground />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24 w-full">
                <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />

                <div className="bg-white/95 dark:bg-white/12 border border-white/70 dark:border-white/20 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl shadow-xl shadow-slate-200/30 dark:shadow-none max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-slate-900 dark:text-white">Privacy Policy</h1>
                    <div className="prose prose-slate dark:prose-invert prose-lg max-w-none space-y-8 text-slate-800 dark:text-slate-200">
                <p className="text-slate-600 dark:text-slate-400 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
                <section>
                    <p>
                        Tatvix (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines our practices regarding the collection, use, processing, and disclosure of your information when you access or use our website, applications, and services (collectively, the &quot;Services&quot;). By accessing or using our Services, you consent to the data practices described in this policy.
                    </p>
                    <p>
                        We operate in accordance with applicable data protection laws, including the Information Technology Act, 2000 (India) and diverse international standards where applicable.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-900 dark:text-white mb-4">1. Information We Collect</h2>
                    <p>We collect information to provide better services to all our users. This includes:</p>

                    <h3 className="text-xl font-medium text-slate-900 dark:text-white mt-4 mb-2">1.1 Personal Information</h3>
                    <p>
                        When you contact us, request a quote, or sign up for our newsletter, we may collect personally identifiable information (&quot;Personal Information&quot;), which may include but is not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Identity Data:</strong> First name, last name, username, or similar identifier.</li>
                        <li><strong>Contact Data:</strong> Email address, telephone numbers, and physical business address.</li>
                        <li><strong>Professional Data:</strong> Job title, company name, and industry vertical.</li>
                    </ul>

                    <h3 className="text-xl font-medium text-slate-900 dark:text-white mt-4 mb-2">1.2 Usage and Technical Data</h3>
                    <p>
                        Our servers automatically record information (&quot;Log Data&quot;) created by your use of the Services. Log Data may include information such as your IP address, browser type, operating system, the referring web page, pages visited, location, your mobile carrier, device and application IDs, search terms, and cookie information. We use this data to monitor the health of our infrastructure and analyze user trends.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-900 dark:text-white mb-4">2. Processing of Data</h2>
                    <p>We process your data for the following legitimate business purposes:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Service Delivery:</strong> To provide, operate, and maintain our websites and services.</li>
                        <li><strong>Communication:</strong> To send you administrative and promotional emails, and to respond to your inquiries.</li>
                        <li><strong>Security:</strong> To prevent fraud, protect the security of our website, and ensure compliance with our Terms of Service.</li>
                        <li><strong>Improvement:</strong> To analyze how you use our website to improve user experience and develop new features.</li>
                        <li><strong>Marketing:</strong> To develop targeted advertising and marketing campaigns (you may opt-out at any time).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">3. Data Sharing and Disclosure</h2>
                    <p>We do not sell your personal information. We share your information only in the following circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>With Service Providers:</strong> We may employ third-party companies and individuals to facilitate our Service (e.g., cloud hosting, analytics, email delivery). These third parties have access to your Personal Information only to perform these specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
                        <li><strong>For Legal Reasons:</strong> We will disclose your Personal Information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                        <li><strong>Business Transfers:</strong> If Tatvix is involved in a merger, acquisition, or asset sale, your Personal Information may be transferred. We will provide notice before your Personal Information is transferred and becomes subject to a different Privacy Policy.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">4. Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">5. Data Retention</h2>
                    <p>
                        We will retain your Personal Information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">6. Data Security</h2>
                    <p>
                        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. We utilize industry-standard encryption protocols (SSL/TLS) and strict access controls to protect your personal information. However, we cannot guarantee its absolute security.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">7. International Data Transfers</h2>
                    <p>
                        Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. By using our Services, you consent to this transfer.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">8. Children&apos;s Privacy</h2>
                    <p>
                        Our Service does not address anyone under the age of 18 (&quot;Children&quot;). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">9. Your Data Rights</h2>
                    <p>Depending on your location, you may have the following rights:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>The right to access, update or to delete the information we have on you.</li>
                        <li>The right of rectification.</li>
                        <li>The right to object.</li>
                        <li>The right of restriction.</li>
                        <li>The right to data portability.</li>
                        <li>The right to withdraw consent.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">10. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us by email or phone.
                    </p>
                    <div className="mt-4 p-4 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10">
                        <p className="text-slate-900 dark:text-white">
                            <strong>Tatvix Technologies</strong><br />
                            Ahmedabad, Gujarat, India<br />
                            Email: <strong>info@tatvixtech.com</strong><br />
                            Phone: <strong>+91 87587 29042</strong>
                        </p>
                    </div>
                </section>
                    </div>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
