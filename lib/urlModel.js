import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortenUrl: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if model already exists to avoid OverwriteModelError
const Url = mongoose.models.Url || mongoose.model('Url', urlSchema);

export default Url;
