export interface IImage {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string | null;
  exif: IImageExif;
  location: IImageLocation;
  current_user_collections: IImageCollection[];
  urls: IImageUrls;
  links: IImageLinks;
  user: IImageUser;
}

export interface IImageExif {
  make: string;
  model: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface IImageLocation {
  name: string;
  city: string;
  country: string;
  position: {
    latitude: number;
    longitude: number;
  };
}

export interface IImageCollection {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: null | IImage;
  user: null | IImageUser;
}

export interface IImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface IImageLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface IImageUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
}
