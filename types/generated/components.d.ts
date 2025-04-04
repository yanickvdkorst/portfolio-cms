import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'buttons';
  info: {
    description: '';
    displayName: 'Button';
    name: 'Button';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PagecompsBanner extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    display: Schema.Attribute.Enumeration<['standard', 'alternative']>;
    span: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PagecompsImage extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    Display: Schema.Attribute.Enumeration<['standard', 'alternative']>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface PagecompsImageGalery extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_image_galeries';
  info: {
    displayName: 'Image Galery';
  };
  attributes: {
    Images: Schema.Attribute.Component<'repeaters.image-repeater', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface PagecompsProjectFeatured extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_project_featureds';
  info: {
    description: '';
    displayName: 'Project Featured';
  };
  attributes: {
    button: Schema.Attribute.Component<'button.button', false>;
    selectedProjectSlugs: Schema.Attribute.Relation<
      'oneToMany',
      'api::project.project'
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagecompsProjectOverview extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_project_overviews';
  info: {
    description: '';
    displayName: 'Project overview';
  };
  attributes: {
    selectedProjectSlugs: Schema.Attribute.Relation<
      'oneToOne',
      'api::project.project'
    >;
  };
}

export interface PagecompsTextDisplay extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_text_displays';
  info: {
    description: '';
    displayName: 'Text-display';
  };
  attributes: {
    button: Schema.Attribute.Component<'button.button', false>;
    display: Schema.Attribute.Enumeration<['standard', 'alternative']>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagecompsTextWithDetails extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_text_with_details';
  info: {
    description: '';
    displayName: 'Text with details';
  };
  attributes: {
    Items: Schema.Attribute.Component<'repeaters.list-items', true>;
    text_column_1: Schema.Attribute.Text;
    text_column_2: Schema.Attribute.Text;
    title_column_1: Schema.Attribute.String;
    title_column_2: Schema.Attribute.String;
    title_column_3: Schema.Attribute.String;
  };
}

export interface PagecompsTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_text_with_images';
  info: {
    description: '';
    displayName: 'Text with Image';
  };
  attributes: {
    button: Schema.Attribute.Component<'button.button', false>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    tekst: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagecompsUsps extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_usps';
  info: {
    description: '';
    displayName: 'Usps';
  };
  attributes: {
    display: Schema.Attribute.Enumeration<['alternative', 'standard']>;
    title: Schema.Attribute.String;
    usps: Schema.Attribute.Component<'repeaters.usps-repeater', true>;
  };
}

export interface PagecompsVideo extends Struct.ComponentSchema {
  collectionName: 'components_pagecomps_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface RepeatersCatRepeater extends Struct.ComponentSchema {
  collectionName: 'components_repeaters_cat_repeaters';
  info: {
    displayName: 'CatRepeater';
  };
  attributes: {
    Categorie: Schema.Attribute.String;
  };
}

export interface RepeatersColumnRepeater extends Struct.ComponentSchema {
  collectionName: 'components_repeaters_column_repeaters';
  info: {
    displayName: 'ColumnRepeater';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface RepeatersFeatureItems extends Struct.ComponentSchema {
  collectionName: 'components_repeaters_feature_items';
  info: {
    displayName: 'FeatureItems';
  };
  attributes: {
    project: Schema.Attribute.String;
  };
}

export interface RepeatersImageRepeater extends Struct.ComponentSchema {
  collectionName: 'components_repeaters_image_repeaters';
  info: {
    description: '';
    displayName: 'ImageRepeater';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface RepeatersListItems extends Struct.ComponentSchema {
  collectionName: 'components_repeaters_list_items';
  info: {
    displayName: 'ListItems';
  };
  attributes: {
    Item: Schema.Attribute.String;
  };
}

export interface RepeatersUspsRepeater extends Struct.ComponentSchema {
  collectionName: 'components_repeaters_usps_repeaters';
  info: {
    description: '';
    displayName: 'USPSRepeater';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'button.button': ButtonButton;
      'pagecomps.banner': PagecompsBanner;
      'pagecomps.image': PagecompsImage;
      'pagecomps.image-galery': PagecompsImageGalery;
      'pagecomps.project-featured': PagecompsProjectFeatured;
      'pagecomps.project-overview': PagecompsProjectOverview;
      'pagecomps.text-display': PagecompsTextDisplay;
      'pagecomps.text-with-details': PagecompsTextWithDetails;
      'pagecomps.text-with-image': PagecompsTextWithImage;
      'pagecomps.usps': PagecompsUsps;
      'pagecomps.video': PagecompsVideo;
      'repeaters.cat-repeater': RepeatersCatRepeater;
      'repeaters.column-repeater': RepeatersColumnRepeater;
      'repeaters.feature-items': RepeatersFeatureItems;
      'repeaters.image-repeater': RepeatersImageRepeater;
      'repeaters.list-items': RepeatersListItems;
      'repeaters.usps-repeater': RepeatersUspsRepeater;
    }
  }
}
