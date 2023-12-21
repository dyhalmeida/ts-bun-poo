import { IVideoActions } from "./VideoActions.interface";

export class Video implements IVideoActions {
  private title: string
  private stars: number
  private views: number
  private likes: number
  private playingVideo: boolean

  constructor(title: string){
    this.title = title
    this.stars = 1
    this.views = 0
    this.likes = 0
    this.playingVideo = false
  }

  public getTitle(): string {
    return this.title;
  }

  public getStars(): number {
    return this.stars;
  }

  public getViews(): number {
    return this.views;
  }

  public getLikes(): number {
    return this.likes;
  }

  public getPlayingVideo(): boolean {
    return this.playingVideo;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setStars(stars: number): void {
    this.stars = (this.stars + stars) / this.views
  }

  public setViews(views: number): void {
    this.views = views;
  }

  public setLikes(likes: number): void {
    this.likes = likes;
  }

  public setPlayingVideo(playingVideo: boolean): void {
    this.playingVideo = playingVideo;
  }

  play(): void {
    this.setPlayingVideo(true)
  }

  pause(): void {
    this.setPlayingVideo(false)
  }

  like(): void {
    this.setLikes(this.getLikes() + 1)
  }

  state() {
    return {...this}
  }
}