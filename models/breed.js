const prisma = require('../libs/prisma')

class BreedModel {
  static async getMany({ onlynames, limit, top }) {
    if (onlynames) {
      if (limit) {
        const breedNames = await prisma.breeds.findMany({
          select: {
            name: true
          },
          take: parseInt(limit)
        });
        return breedNames;
      } else {
        const breedNames = await prisma.breeds.findMany({
          select: {
            name: true,
          },
        });
        return breedNames;
      }
    } else if (top) {
      const breeds = await prisma.breeds.findMany({
        take: 10,
        select: {
          name: true,
          description: true,
          reference_image_id: true
        }
      });
      return breeds;
    } else {
      if (limit) {
        const breeds = await prisma.breeds.findMany({
          take: parseInt(limit)
        });
        return breeds;
      } else {
        const breeds = await prisma.breeds.findMany();
        return breeds;
      }
    }
  }

  static async getByName({ name }) {
    const dencodedName = decodeURIComponent(name);
    const breed = await prisma.breeds.findFirst({
      where: {
        name: {
          equals: dencodedName,
          mode: 'insensitive'
        }
      }
    });

    const getPhotos = async (breed) => {
      const id = breed.id;
      const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${id}`);
      const images = await res.json();
      const imagesUrls = images.map(image => image.url);
      breed.imagesUrls = imagesUrls;
    };

    await getPhotos(breed);
    return breed;
  }
}

module.exports = BreedModel;
