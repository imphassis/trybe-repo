// /src/components/Album.js
import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <section>
        <img src={this.props.album.image} alt={this.props.album.title} />
        <h2>{this.props.album.title}</h2>
        <p>{this.props.album.releaseDate.year}</p>
        <p>
          Lançamento:
          {`${this.props.album.releaseDate.day}/${this.props.album.releaseDate.month}/${this.props.album.releaseDate.year}`}
        </p>
        <p>Gravadora: {this.props.album.others.recordCompany}</p>
        <p>Formatos: {this.props.album.others.formats}</p>
      </section>
    );
  }
}

const album01 = {
  image:
    'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
  title: 'Mylo Xyloto',
  releaseDate: {
    year: '2011',
    month: '10',
    day: '24',
  },
  others: {
    recordCompany: 'Capitol, Parlophone',
    formats: 'CD, digital',
  },
};

const album02 = {
  image:
    'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
  title: 'Ghost Stories',
  releaseDate: {
    year: '2014',
    month: '05',
    day: '16',
  },
  others: {
    recordCompany: 'Parlophone',
    formats: 'CD, digital',
  },
};
export { Album, album01, album02 };
