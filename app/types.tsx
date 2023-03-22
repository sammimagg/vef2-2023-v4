import { type } from "os";

export type Department = {
    id: number,
    title: string,
    slug: string,
    description: string,
    created: Date,
    updated: Date,
    _links: {
      self: { href: string },
      courses: { href: string }
    }
  };