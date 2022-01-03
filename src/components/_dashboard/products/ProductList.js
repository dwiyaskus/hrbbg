import PropTypes from 'prop-types';
// material
import { Grid, Box, Icon, Typography, Stack, Button, IconButton } from '@material-ui/core';
import plusFill from '@iconify/icons-eva/plus-fill';
import minusFill from '@iconify/icons-eva/minus-fill';
import shoppingCartFill from '@iconify/icons-eva/shopping-cart-fill';
import ShopProductCard from './ProductCard';
// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {/* {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))} */}

      {products.map((product) => (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ m: 2 }}
        >
          <Grid item xs={10}>
            <Grid container direction="row">
              <Box
                component="img"
                alt={product.name}
                src={product.cover}
                sx={{ width: 48, height: 48, borderRadius: 1.5, mr: 2 }}
              />
              <Box sx={{ minWidth: 150 }}>
                <Typography variant="subtitle2" noWrap>
                  {product.name.slice(0, 30)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                  {product.price}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Button variant="contained" to="">
              Add
            </Button>
          </Grid>
        </Grid>
        // <Grid key={product.id} item xs={12}>
        //   <Stack direction="row" spacing={2}>
        //     <Box
        //       component="img"
        //       alt={product.name}
        //       src={product.cover}
        //       sx={{ width: 48, height: 48, borderRadius: 1.5 }}
        //     />
        //     <Box sx={{ minWidth: 150 }}>
        //       <Link to="#" color="inherit" underline="hover">
        //         <Typography variant="subtitle2" noWrap>
        //           {product.name}
        //         </Typography>
        //       </Link>
        //       <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
        //         {product.price}
        //       </Typography>
        //     </Box>
        //     <div>
        //       <Button variant="contained" to="">
        //         Add
        //       </Button>
        //     </div>
        //   </Stack>
        // </Grid>
      ))}
    </Grid>
  );
}
