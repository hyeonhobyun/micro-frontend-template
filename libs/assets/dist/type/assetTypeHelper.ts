export type SpriteDirectories = 'test';
export type TestSpriteImages = 'ic_alert_circle_fill' | 'ic_alert_circle_line' | 'ic_alert_triangle_fill' | 'ic_change_line' | 'ic_check_line' | 'ic_close_line' | 'ic_download_line' | 'ic_hambuger_line' | 'ic_left_line' | 'ic_minus_line' | 'ic_plus_line' | 'ic_right_line';
    
export interface AllOfSpriteImages {
test: TestSpriteImages
}

export type PickImageSet<T extends SpriteDirectories> = AllOfSpriteImages[T];
export type SVGNames = never;
