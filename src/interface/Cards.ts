export interface InterDiscountCard {
  imageSrc: string; // Propiedad requerida para la URL de la imagen
  altText?: string; // Propiedad opcional para el texto alternativo de la imagen
  title: string; // Título del producto
  badge: string; // Etiqueta adicional
  discount: number; // Descuento en porcentaje
  className?: string; // Clases personalizadas opcionales
}

export interface InterProductCard {
  imageSrc: string; // Propiedad requerida para la URL de la imagen
  altText?: string; // Propiedad opcional para el texto alternativo de la imagen
  title: string; // Propiedad para el título
  location: string; // Propiedad para la ubicación
  price: number; // Propiedad para el precio
  link?: string; // Propiedad opcional para un enlace
}

export interface InterRestaurantCard {
  imageSrc: string; 
  imageRes: string; 
  altText?: string; 
  title: string; 
  badge: string;
  discount: number; 
  stars: number; 
}