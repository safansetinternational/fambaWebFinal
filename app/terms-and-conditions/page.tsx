import { Card } from "@/components/ui/card"
import { FileText, AlertCircle, Scale, Shield, UserCheck } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
              <Scale className="h-8 w-8 text-secondary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold font-[family-name:var(--font-poppins)] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground">
            Last Updated: December 2, 2024
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Agreement to Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Welcome to Famba247! These Terms and Conditions ("Terms") govern your access to and use of the Famba247 mobile application and services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
          </p>
        </Card>

        {/* Services Description */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Famba247 provides a technology platform that connects riders with independent drivers for transportation services in Zimbabwe. We do not provide transportation services directly but facilitate connections between users.
          </p>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> Drivers using the Famba247 platform are independent contractors, not employees or agents of Famba247.
            </p>
          </div>
        </Card>

        {/* Eligibility */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <UserCheck className="h-6 w-6 text-primary" />
            Eligibility
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>You must be at least 18 years old to use our services</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>You must provide accurate and complete registration information</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>You must maintain the security of your account credentials</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
              <span>You are responsible for all activities under your account</span>
            </li>
          </ul>
        </Card>

        {/* User Responsibilities */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">As a Rider, you agree to:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Provide accurate pickup and drop-off locations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Be ready at the designated pickup location</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Treat drivers with respect and courtesy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Pay the agreed-upon fare for completed rides</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Not engage in illegal, dangerous, or inappropriate behavior</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">As a Driver, you agree to:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2" />
                  <span>Maintain a valid driver's license and vehicle registration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2" />
                  <span>Keep your vehicle clean, safe, and well-maintained</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2" />
                  <span>Comply with all traffic laws and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2" />
                  <span>Provide safe and professional service to riders</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2" />
                  <span>Accept or decline ride requests at your discretion</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Pricing and Payment */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Pricing and Payment</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Famba247 uses a unique pricing model where riders can suggest their price for trips. Drivers can accept or negotiate these offers.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                <span>Final fare is agreed upon between rider and driver</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                <span>Payment must be made through the app or as agreed with the driver</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                <span>Famba247 charges a service fee on completed trips</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                <span>Cancellation fees may apply for late cancellations</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                <span>All prices are in Zimbabwean currency (ZWL or USD)</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Cancellations and Refunds */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Cancellations and Refunds</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Cancellation Policy</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Free cancellation within 2 minutes of booking</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Cancellation fees may apply after this period</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                  <span>Drivers may cancel if riders are not ready after 5 minutes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Refund Policy</h3>
              <p className="leading-relaxed">
                Refunds are issued on a case-by-case basis for issues such as service problems, incorrect charges, or cancelled trips. Contact customer support for refund requests.
              </p>
            </div>
          </div>
        </Card>

        {/* Safety and Security */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            Safety and Security
          </h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Your safety is our priority. All drivers undergo background checks and vehicle inspections.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                <span>All rides are GPS-tracked in real-time</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                <span>Emergency assistance button available in-app</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                <span>Share your trip details with trusted contacts</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                <span>Report safety concerns immediately to support@famba247.com</span>
              </li>
            </ul>

            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg p-4 mt-4">
              <p className="text-sm text-red-800 dark:text-red-200">
                <strong>Emergency:</strong> In case of immediate danger, contact local emergency services first (999 or 112), then notify Famba247.
              </p>
            </div>
          </div>
        </Card>

        {/* Prohibited Activities */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-destructive" />
            Prohibited Activities
          </h2>
          
          <p className="text-muted-foreground mb-4">Users must not:</p>
          
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2" />
              <span>Use the service for illegal purposes</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2" />
              <span>Harass, abuse, or harm other users or drivers</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2" />
              <span>Provide false or misleading information</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2" />
              <span>Attempt to manipulate ratings or reviews</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2" />
              <span>Interfere with the app's operation or security</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2" />
              <span>Use the app while under the influence of alcohol or drugs</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2" />
              <span>Transport illegal goods or substances</span>
            </li>
          </ul>
        </Card>

        {/* Liability and Disclaimers */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Liability and Disclaimers</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              <strong>Service Availability:</strong> We strive to provide continuous service but do not guarantee uninterrupted access. We may suspend or terminate services for maintenance or other reasons.
            </p>
            
            <p className="leading-relaxed">
              <strong>Third-Party Services:</strong> Famba247 acts as an intermediary. We are not responsible for the actions or omissions of drivers, who are independent contractors.
            </p>
            
            <p className="leading-relaxed">
              <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, Famba247 shall not be liable for indirect, incidental, special, or consequential damages arising from your use of our services.
            </p>

            <p className="leading-relaxed">
              <strong>Property Damage or Loss:</strong> We are not responsible for items lost or damaged during rides. Users should keep valuables secure.
            </p>
          </div>
        </Card>

        {/* Intellectual Property */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            All content, features, and functionality of the Famba247 app, including but not limited to text, graphics, logos, and software, are owned by Famba247 and protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You may not copy, modify, distribute, or create derivative works based on our content without express written permission.
          </p>
        </Card>

        {/* Account Termination */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Account Termination</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these Terms or engage in conduct we deem harmful to the platform or other users.
            </p>
            
            <p className="leading-relaxed">
              You may close your account at any time through the app settings or by contacting customer support.
            </p>
          </div>
        </Card>

        {/* Governing Law */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.
          </p>
        </Card>

        {/* Changes to Terms */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Changes to These Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update these Terms from time to time. We will notify you of significant changes via the app or email. Your continued use of our services after changes constitute acceptance of the updated Terms.
          </p>
        </Card>

        {/* Contact */}
        <Card className="p-8 bg-primary/5">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Email:</strong> legal@famba247.com</p>
            <p><strong>Support:</strong> support@famba247.com</p>
            <p><strong>Phone:</strong> +263 778 179 409</p>
            <p><strong>Address:</strong> 1 Lancaster Ave, Belvedere, Harare, Zimbabwe</p>
          </div>
        </Card>

        {/* Acceptance */}
        <div className="bg-muted rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground">
            By using Famba247, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  )
}