import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last Updated: December 2, 2024
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Introduction
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Famba247 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By using the Famba247 app, you agree to the collection and use of information in accordance with this policy.
          </p>
        </Card>

        {/* Information We Collect */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Name, email address, and phone number</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Profile photo (optional)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Payment information (processed securely through third-party payment processors)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Location Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Real-time GPS location data when using the app</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Pickup and drop-off locations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Route information during trips</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Device Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Device type, operating system, and unique device identifiers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>IP address and mobile network information</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>App usage data and crash reports</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Transaction Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Ride history, dates, times, and fares</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Driver ratings and feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Communication between riders and drivers</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* How We Use Your Information */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Lock className="h-6 w-6 text-primary" />
            How We Use Your Information
          </h2>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>To provide, maintain, and improve our ride-hailing services</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>To match riders with nearby drivers</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>To process payments and send receipts</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>To provide customer support and respond to inquiries</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>To send important service updates and notifications</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>To ensure safety and security of our platform</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>To detect and prevent fraud, abuse, or illegal activity</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>To analyze usage patterns and improve user experience</span>
            </li>
          </ul>
        </Card>

        {/* Data Sharing */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">With Drivers</h3>
              <p>We share necessary information (name, pickup location, phone number) with drivers to facilitate rides.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Service Providers</h3>
              <p>We work with third-party service providers for payment processing, analytics, and customer support.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Legal Requirements</h3>
              <p>We may disclose information when required by law or to protect our rights and safety.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Business Transfers</h3>
              <p>In the event of a merger or acquisition, your information may be transferred to the new entity.</p>
            </div>
          </div>
        </Card>

        {/* Data Security */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </Card>

        {/* Your Rights */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span><strong>Access:</strong> Request access to your personal information</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span><strong>Correction:</strong> Request correction of inaccurate information</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span><strong>Deletion:</strong> Request deletion of your personal information</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span><strong>Opt-out:</strong> Opt-out of marketing communications</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span><strong>Data Portability:</strong> Request a copy of your data in a portable format</span>
            </li>
          </ul>
        </Card>

        {/* Children's Privacy */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </Card>

        {/* Changes to Policy */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </Card>

        {/* Contact */}
        <Card className="p-8 bg-primary/5">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Email:</strong> privacy@famba247.com</p>
            <p><strong>Phone:</strong> +263 778 179 409</p>
            <p><strong>Address:</strong> 1 Lancaster Ave, Belvedere, Harare, Zimbabwe</p>
          </div>
        </Card>
      </div>
    </div>
  )
}