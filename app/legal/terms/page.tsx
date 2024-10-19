import { Layout, LayoutContent } from "@/src/components/layout"
import { Typography } from "@/src/components/ui/typography"
import { MDXRemote } from "next-mdx-remote/rsc"

const markdown = `# FrostSolutions TERMS OF USE

FrostSolutions (the “Company”) operates the website located at [https://frostsolutions.pro](https://frostsolutions.pro) (the “**Site**”). These Terms of Use (“**Terms**”) govern your access to and use of our Site and the services offered through it (the “**Service**”).

By accessing or using the Site or the Service, you accept and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Site or the Service.

## I. ACCESS TO THE SITE

### 1.1 License
Subject to these Terms, the Company grants you a limited, non-exclusive, non-transferable license to access and use the Site solely for your personal and non-commercial use.

### 1.2 Restrictions
You shall not (a) modify, reproduce, or distribute any content from the Site; (b) use the Site for any commercial purpose without our prior written consent; (c) access or use the Site in any manner that could damage, disable, or impair the Site; (d) engage in any activity that interferes with or disrupts the Site.

### 1.3 Modification
The Company reserves the right to modify or discontinue the Site at any time, with or without notice to you. We shall not be liable to you or any third party for any modification or discontinuation of the Site.

### 1.4 Ownership
All rights, title, and interest in and to the Site and its content are owned by the Company or its licensors. You acknowledge that you do not acquire any ownership rights by using the Site.

## II. USER CONTENT

### 2.1 User Content
“**User Content**” refers to any content you submit to or use with the Site. You are solely responsible for your User Content and the consequences of submitting it. By submitting User Content, you grant the Company a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your User Content.

### 2.2 Prohibited User Content
You agree not to submit User Content that is illegal, offensive, defamatory, or infringes on the rights of any third party. The Company reserves the right to remove any User Content that violates these Terms.

## III. DISCLAIMER OF WARRANTIES

THE SITE AND SERVICE ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. THE COMPANY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

## IV. LIMITATION OF LIABILITY

TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE OR SERVICE.

## V. GOVERNING LAW

These Terms shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law principles.

## VI. CHANGES TO THESE TERMS

The Company reserves the right to modify these Terms at any time. We will notify you of significant changes by posting the updated Terms on the Site. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.

## VII. CONTACT US

If you have any questions regarding these Terms, please contact us at contact@frostsolutions.pro.

_Last Updated: October 19, 2024._`

export default function page() {
  return (
    <div>
      <div className="flex w-full items-center justify-center bg-card p-8 lg:p-12">
        <Typography variant="h1">Terms of Use</Typography>
      </div>
      <Layout>
        <LayoutContent className="prose dark:prose-invert mb-8">
          <MDXRemote source={markdown} />
        </LayoutContent>
      </Layout>
    </div>
  )
}
