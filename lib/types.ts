
export interface Idea {
    [x: string]: any;
    uuid: string; 
    title: string;
    description?: string;
    content?: string;
    createdTime: Date;  
    updatedTime: Date;  
      
  }