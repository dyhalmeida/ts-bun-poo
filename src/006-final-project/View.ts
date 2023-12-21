import { Student } from "./Student";
import { Video } from "./Video";

export class View {
  private viewer: Student
  private movie: Video

  constructor(viewer: Student, movie: Video) {
    this.viewer = viewer
    this.movie = movie
    this.viewer.setTotalWatched(this.viewer.getTotalWatched() + 1)
    this.movie.setViews(this.movie.getViews() + 1)
  }

  public getViewer(): Student {
    return this.viewer;
  }

  public getMovie(): Video {
    return this.movie;
  }

  public setViewer(viewer: Student): void {
    this.viewer = viewer;
  }

  public setMovie(movie: Video): void {
    this.movie = movie;
  }

  // @overload | polimorfismo de sobrecarga
  public rate(): void
  public rate(note: number): void
  public rate(percentage: number): void
  public rate(noteOrPercentage?: number): void {
    if (!noteOrPercentage) {
      this.movie.setStars(5)
      return
    }

    let total = 0
    if (noteOrPercentage <= 20) {
      total = 3
    } else if (noteOrPercentage <= 50) {
      total = 5
    } else if (noteOrPercentage <= 90) {
      total = 8
    } else {
      total = 10
    }

    if (total) {
      this.movie.setStars(total)
    } else {
      this.movie.setStars(noteOrPercentage)
    }
  }

  state() {
    return {...this}
  }
}