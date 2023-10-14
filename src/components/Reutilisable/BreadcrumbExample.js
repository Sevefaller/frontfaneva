import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class BreadcrumbExample extends React.Component {
  render() {
    const { name, lien } = this.props; // Récupérer les valeurs de nom et de lien depuis les props

    return (
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={lien}>{name}</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default BreadcrumbExample;
