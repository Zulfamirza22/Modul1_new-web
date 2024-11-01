<?php
namespace Traits;

trait Logger {
    public function log($message) {
        echo "[Log]: " . $message . "\n";
    }
}
?>
