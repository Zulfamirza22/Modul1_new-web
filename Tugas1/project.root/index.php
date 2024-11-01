<?php
require 'Traits/Logger.php';
require 'Category/AbstractCategory.php';
require 'Category/Category.php';
require 'Inventory/Product.php';

use Inventory\Product;
use Category\Category;

// Membuat kategori dan produk
$category = new Category("Electronics", "Devices and gadgets");
$product = new Product("Smartphone", 5000000, $category);

// Menampilkan informasi produk
echo $product;
?>
