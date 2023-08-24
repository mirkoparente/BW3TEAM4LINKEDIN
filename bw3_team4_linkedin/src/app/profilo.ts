export interface Profilo {
  _id: number;
  name: string;
  surname: string;
  email: string;
  image: string;
  username: string;
  title: string;
  bio: string;
  area: string;
}

export interface Exp {
  _id: string;
  role: string;
  company: string;
  image: string;
  startDate: string;
  description: string;
  area: string;
  username: string;
  user: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
export interface addExp {
  role: string;
  company: string;
  startDate: string;
  description: string;
  area: string;
}

export interface Post {
  text: string;
  image: string;
  _id: any;
}

export interface Comments {
  comment: string;
  rate: string;
  elementId: string;
}
