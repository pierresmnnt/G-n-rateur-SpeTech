<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
    <link href="/favicon.png" rel="icon">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <a href="https://www.prismamediasolutions.com/"><img src="/media/pms-logo.svg" alt="logo prisma media solution" width="140"></a>
    </header>
    <main class="container">
        <div class="page__header">
            <h1 class="page__title text-center"><?= $title ?></h1>
            <?= isset($description) ? "<p class='text-center'>$description</p>" : "" ?>
        </div>
        <div class="page__content">
            <?= $content ?>
        </div>
    </main>
    <footer>
        <p>Coded by <a href="https://github.com/pierresmnnt">@Pierre</a> and <a href="https://github.com/murat60">@Murat</a></p>
    </footer>
</body>
</html>