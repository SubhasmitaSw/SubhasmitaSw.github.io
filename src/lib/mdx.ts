
// Map of file paths to their content
const contentMap = new Map<string, string>();

// Add talks content
contentMap.set('/src/content/talks.mdx', `
# My Talks & Presentations

## Serverless Computing: Building Applications with AWS Lambda
*March 15, 2023 at Tech Conference 2023, New York*

An introduction to serverless architecture and how to leverage AWS Lambda for building scalable applications.

[View Slides](https://example.com/slides/serverless-computing) | [Watch Recording](https://example.com/videos/serverless-computing)

---

## Cloud-Native Development Best Practices
*May 22, 2023 at Cloud Summit, San Francisco*

Exploring best practices for developing cloud-native applications and leveraging modern infrastructure.

[View Slides](https://example.com/slides/cloud-native) | [Watch Recording](https://example.com/videos/cloud-native)

---

## From Monolith to Microservices: A Journey
*July 10, 2023 at DevOps Days, Seattle*

Sharing insights and experiences from migrating a monolithic application to a microservices architecture.

[View Slides](https://example.com/slides/microservices)

---

## Technical Writing for Developers
*September 5, 2023 at Write the Docs, Portland*

Tips and strategies for developers to improve their technical writing skills and create effective documentation.

[View Slides](https://example.com/slides/tech-writing) | [Watch Recording](https://example.com/videos/tech-writing)
`);

export async function getMdxContent(filePath: string): Promise<string> {
  try {
    // Instead of using matter which requires Buffer, get content directly from our map
    const content = contentMap.get(filePath);
    
    if (!content) {
      throw new Error(`Failed to load MDX file: ${filePath}`);
    }
    
    return content;
  } catch (error) {
    console.error('Error loading MDX content:', error);
    return '';
  }
}
