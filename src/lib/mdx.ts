// src/lib/mdx.ts
import { Talk } from '@/types';

// Map of file paths to their content
const contentMap = new Map<string, string>();

// Add talks content from the content you shared
contentMap.set('/talks.mdx', `
# My Talks & Presentations

## A Day in the Life of Kubernetes Release with Tools, Challenges, and Operations
*[KubeCon + CloudNativeCon (Maintainers Summit) India 2024](https://events.linuxfoundation.org/archive/2024/kubecon-cloudnativecon-india/program/maintainer-summit/)*

Discover how Kubernetes release engineers weave environmental sustainability into their automation tools and processes, balancing ecological responsibility with efficient delivery while creating innovations that can benefit the entire cloud-native ecosystem.

[View Slides](https://docs.google.com/presentation/d/1gYFrivYyzndE5YOH3tkEUpZ4KAQRiV1Q/edit?usp=sharing&ouid=116999642630624529428&rtpof=true&sd=true) | [View Recording](https://youtu.be/uIEaoz9wcRE?si=YURRZrCL_wliCvJt)

## Automated Model Retraining with GitHub Actions	
*[GitTogether 2024](https://www.meetup.com/gittogether-delhi/events/303294169/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link)*

In this talk, we explore how to leverage GitHub Actions for seamless machine learning model retraining pipelines, enabling continuous integration of your ML workflows without the traditional DevOps overhead.

[View Slides](https://docs.google.com/presentation/d/1KInBc3qwQfv23JkWsj10zW3ZVVzGag0MVe5R3O_oOOE/edit#slide=id.gd9c453428_0_16)

---
## How I Met Your Software – an Image's Sitcom of Consuming and Securing Software in Cloud Native!
*[KubeCon + CloudNativeCon Europe 2024](https://sched.co/1YeRc)*

Hi, I am an OCI Image and before I am fed as a Kubernetes workload, here's my story - how I met your software - whether it was curl-bash-piped or 'apk'ed, 'apt'ed, 'yum'med or 'brew'ed? The plot airs this KubeCon delving from the tradeoffs of consuming software via distro vs. via projects to how I was fine-grained further as Kubernetes workloads.Exploring the rise of open-source software and projects like NPM, Maven, PyPI, the discussion centers on the dilemma of obtaining the latest software: opting for external installations for quick updates versus relying on more reliable distributions with robust supply chain checks for enhanced security. The presenters will dissect the techniques of choosing the consumer software by comparing various distributions like Alpine, Wolfi and how a few of them are solving for maintaining the pace with upstream projects. So join me, the Image, in this journey on how I am smoothly and securely rocketed into the cloud and become its native!

[View Slides](https://docs.google.com/presentation/d/1I8_bTPoK277oFJMlD8XoIwxwy2nudiVfdwD-DsDR8Pc/edit?usp=sharing)

---
## Cluster Management: Unlocking the Secrets of Cluster API and It's Providers
*[Kubernetes Community Days, Chennai 2023](https://community.cncf.io/events/details/cncf-kcd-chennai-presents-kubernetes-community-days-chennai-2023/)*

Discover how Cluster API and its ecosystem of providers simplify Kubernetes cluster management across multiple environments, automating the complex machinery of cluster provisioning and lifecycle while unlocking powerful, declarative infrastructure-as-code practices.

[View Slides](https://docs.google.com/presentation/d/1QNrw8yvXtJ5UIyhCmZv0GgVxDpFviAsPyTih4pvq4yg/edit?usp=sharing) | [Watch Recording](https://www.youtube.com/watch?v=b7gE5chtVx4&list=PLj6h78yzYM2MIkld9XIxYrWj_j8mBOLpU&index=17&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D)

---
## Head-to-Head: DevOps vs MLOps	
*WMDevs*

Explore the battle lines drawn between traditional DevOps and specialized MLOps as we dissect their unique challenges, overlapping territories, and the critical distinctions that matter for delivering AI systems at scale.

[View Slides](https://docs.google.com/presentation/d/1ckx3igzs5Vy2VWRLfYnR1UhA61cn-4pA0dDw4Rg2KVs/edit?usp=sharing) 

## Kubernetes security 101: How to keep your clusters safe and secure	

From deployment vulnerabilities to runtime threats, this talk will equip you with essential Kubernetes security strategies to protect your clusters from potential breaches while maintaining operational efficiency.

[View Slides](https://docs.google.com/presentation/d/17HFM3eMr6CyqFuxylGKc_qIT6NnDicDIFDfMDzcoXVM/edit?usp=sharing)
`);

export async function getMdxContent(filePath: string): Promise<string> {
  try {
    // Get content directly from our map
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

export async function getTalks(): Promise<Talk[]> {
  try {
    const content = contentMap.get('/talks.mdx');
    if (!content) {
      return [];
    }
    
    // Directly return the talks from the content map
    const talks = [
      {
        id: 'talk-1',
        title: 'A Day in the Life of Kubernetes Release with Tools, Challenges, and Operations',
        venue: 'KubeCon + CloudNativeCon (Maintainers Summit) India 2024',
        eventLink: 'https://events.linuxfoundation.org/archive/2024/kubecon-cloudnativecon-india/program/maintainer-summit/',
        date: '',
        description: 'Discover how Kubernetes release engineers weave environmental sustainability into their automation tools and processes, balancing ecological responsibility with efficient delivery while creating innovations that can benefit the entire cloud-native ecosystem.',
        slideUrl: 'https://docs.google.com/presentation/d/1gYFrivYyzndE5YOH3tkEUpZ4KAQRiV1Q/edit?usp=sharing&ouid=116999642630624529428&rtpof=true&sd=true',
        videoUrl: 'https://youtu.be/uIEaoz9wcRE?si=YURRZrCL_wliCvJt'
      },
      {
        id: 'talk-2',
        title: 'Automated Model Retraining with GitHub Actions',
        venue: 'GitTogether 2024',
        eventLink: 'https://www.meetup.com/gittogether-delhi/events/303294169/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link',
        date: '',
        description: 'In this talk, we explore how to leverage GitHub Actions for seamless machine learning model retraining pipelines, enabling continuous integration of your ML workflows without the traditional DevOps overhead.',
        slideUrl: 'https://docs.google.com/presentation/d/1KInBc3qwQfv23JkWsj10zW3ZVVzGag0MVe5R3O_oOOE/edit#slide=id.gd9c453428_0_16',
        videoUrl: ''
      },
      {
        id: 'talk-3',
        title: 'How I Met Your Software – an Image\'s Sitcom of Consuming and Securing Software in Cloud Native!',
        venue: 'KubeCon + CloudNativeCon Europe 2024',
        eventLink: 'https://sched.co/1YeRc',
        date: '',
        description: 'Hi, I am an OCI Image and before I am fed as a Kubernetes workload, here\'s my story - how I met your software - whether it was curl-bash-piped or \'apk\'ed, \'apt\'ed, \'yum\'med or \'brew\'ed? The plot airs this KubeCon delving from the tradeoffs of consuming software via distro vs. via projects to how I was fine-grained further as Kubernetes workloads.Exploring the rise of open-source software and projects like NPM, Maven, PyPI, the discussion centers on the dilemma of obtaining the latest software: opting for external installations for quick updates versus relying on more reliable distributions with robust supply chain checks for enhanced security. The presenters will dissect the techniques of choosing the consumer software by comparing various distributions like Alpine, Wolfi and how a few of them are solving for maintaining the pace with upstream projects. So join me, the Image, in this journey on how I am smoothly and securely rocketed into the cloud and become its native!',
        slideUrl: 'https://docs.google.com/presentation/d/1I8_bTPoK277oFJMlD8XoIwxwy2nudiVfdwD-DsDR8Pc/edit?usp=sharing',
        videoUrl: ''
      },
      {
        id: 'talk-4',
        title: 'Cluster Management: Unlocking the Secrets of Cluster API and It\'s Providers',
        venue: 'Kubernetes Community Days, Chennai 2023',
        eventLink: 'https://community.cncf.io/events/details/cncf-kcd-chennai-presents-kubernetes-community-days-chennai-2023/',
        date: '',
        description: 'Discover how Cluster API and its ecosystem of providers simplify Kubernetes cluster management across multiple environments, automating the complex machinery of cluster provisioning and lifecycle while unlocking powerful, declarative infrastructure-as-code practices.',
        slideUrl: 'https://docs.google.com/presentation/d/1QNrw8yvXtJ5UIyhCmZv0GgVxDpFviAsPyTih4pvq4yg/edit?usp=sharing',
        videoUrl: 'https://www.youtube.com/watch?v=b7gE5chtVx4&list=PLj6h78yzYM2MIkld9XIxYrWj_j8mBOLpU&index=17&ab_channel=CNCF%5BCloudNativeComputingFoundation%5D'
      },
      {
        id: 'talk-5',
        title: 'Head-to-Head: DevOps vs MLOps',
        venue: 'WMDevs',
        eventLink: '',
        date: '',
        description: 'Explore the battle lines drawn between traditional DevOps and specialized MLOps as we dissect their unique challenges, overlapping territories, and the critical distinctions that matter for delivering AI systems at scale.',
        slideUrl: 'https://docs.google.com/presentation/d/1ckx3igzs5Vy2VWRLfYnR1UhA61cn-4pA0dDw4Rg2KVs/edit?usp=sharing',
        videoUrl: ''
      },
      {
        id: 'talk-6',
        title: 'Kubernetes security 101: How to keep your clusters safe and secure',
        venue: '',
        eventLink: '',
        date: '',
        description: 'From deployment vulnerabilities to runtime threats, this talk will equip you with essential Kubernetes security strategies to protect your clusters from potential breaches while maintaining operational efficiency.',
        slideUrl: 'https://docs.google.com/presentation/d/17HFM3eMr6CyqFuxylGKc_qIT6NnDicDIFDfMDzcoXVM/edit?usp=sharing',
        videoUrl: ''
      }
    ];
    
    return talks;
  } catch (error) {
    console.error('Error getting talks:', error);
    return [];
  }
}
