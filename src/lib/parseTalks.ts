// src/lib/parseTalks.ts
import { Talk } from '@/types';

export function parseTalksFromMdx(content: string): Talk[] {
  // Split content by the horizontal rule
  const sections = content.split('---\n').filter(Boolean);
  
  // Extract the talks from each section
  return sections.map((section, index) => {
    // Skip the header section if it exists
    if (index === 0 && section.trim().startsWith('# ')) {
      const lines = section.trim().split('\n');
      // If it's just a title, skip this section
      if (lines.length <= 2) {
        return null;
      }
      // Otherwise, process it as a talk
    }

    const lines = section.trim().split('\n');
    
    // Title is usually the first H2 line
    const titleMatch = section.match(/## (.*)/);
    const title = titleMatch ? titleMatch[1].trim() : 'Untitled Talk';
    
    // Venue and date are usually in italics
    const venueMatch = section.match(/\*(.*)\*/);
    let venue = 'Unknown Venue';
    let eventLink = '';
    let date = '';
    
    if (venueMatch) {
      const venueText = venueMatch[1].trim();
      
      // Check if venue contains a link
      const linkMatch = venueText.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        venue = linkMatch[1].trim();
        eventLink = linkMatch[2].trim();
      } else {
        venue = venueText;
      }
      
      // Try to extract date if it appears in the venue line
      const datePattern = /(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}/i;
      const dateMatch = venueText.match(datePattern);
      if (dateMatch) {
        date = dateMatch[0];
      }
    }
    
    // Get description - everything between venue and links
    let description = '';
    let descriptionStarted = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip title and venue lines
      if (line.startsWith('##') || line.startsWith('*')) {
        continue;
      }
      
      // Stop when we reach links
      if (line.startsWith('[View') || line.startsWith('[Watch')) {
        break;
      }
      
      if (line) {
        descriptionStarted = true;
        description += line + ' ';
      }
    }
    
    // Extract slide and video links
    const slideMatch = section.match(/\[View Slides\]\((.*?)\)/);
    const videoMatch = section.match(/\[(?:Watch Recording|View Recording)\]\((.*?)\)/);
    
    const slideUrl = slideMatch ? slideMatch[1].trim() : undefined;
    const videoUrl = videoMatch ? videoMatch[1].trim() : undefined;
    
    return {
      id: `talk-${index}`,
      title,
      venue,
      eventLink,
      date,
      description: description.trim(),
      slideUrl,
      videoUrl
    };
  }).filter(Boolean) as Talk[];
}