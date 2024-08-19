import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

  list(search) {
    return Array.from(this.#videos.entries())
      .map(([id, data]) => ({
        id,
        ...data,
      })) // Primeiro, converte o Map para um array e mapeia os vídeos
      .filter((video) => {
        if (search) {
          return video.title.toLowerCase().includes(search.toLowerCase()); // Adiciona o filtro de busca
        }
        return true; // Se não houver busca, retorna todos os vídeos
      });
  }

  create(video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }
  update(id, video) {
    const existingVideo = this.#videos.get(id);

    if (existingVideo) {
      const updatedVideo = {
        ...existingVideo,
        ...video, // Sobrescreve os campos existentes com os novos valores
      };

      this.#videos.set(id, updatedVideo);
    }
  }
  delete(id) {
    this.#videos.delete(id);
  }
}
