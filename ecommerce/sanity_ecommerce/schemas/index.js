// import schemaTypes from 'all:part:@sanity/base/schema-type';

import banner from './banner';
import product from './product';


// export const schemaTypes = [({
//     name: 'default',
//     types: schemaTypes.concat([ product, banner ]),
//   })]

export const schemaTypes = [product, banner]